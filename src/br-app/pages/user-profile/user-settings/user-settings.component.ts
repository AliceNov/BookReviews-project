import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import {  Store } from "@ngrx/store";
import { ReplaySubject, takeUntil } from "rxjs";
import { AuthenticationService } from "src/br-app/services/auth/authentication.service";
import { deleteUser, getUser, updateUser } from "src/br-app/store/actions/user.action";
import { selectLoginUser } from "src/br-app/store/selectors/user.selectors";
import { User } from "src/models/user.model";

@Component({
  selector: "br-user-settings",
  templateUrl: "./user-settings.component.html",
  styleUrls: ["./user-settings.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSettingsComponent implements OnInit, OnDestroy {

  @Output() changeProfile = new EventEmitter<boolean>();

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  private cover: FormData = new FormData();
  private id: number;
  public user: User = {
    name: "",
    username: "",
    email: ""
  };

  constructor(
    private store: Store,
    private authService: AuthenticationService,
    private cf: ChangeDetectorRef,
    private router: Router) {
      this.id = this.authService.getUserId();
    }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  ngOnInit(): void {
    this.getUserInfo(this.id);
  }

  getUserInfo(userId: number): void{
    this.store.dispatch(getUser({ id: userId }));
    this.store.select((selectLoginUser))
    .pipe(takeUntil(this.destroyed$))
    .subscribe(
      (data) => {
        this.user = {
          name: data?.name,
          username: data?.username,
          email: data?.email
        };
        this.cf.detectChanges();
      },
    );

  }

  onUpload(event: Event): void {
    const selectedFile = (event.target as HTMLInputElement).files[0];
    this.cover.set("file", selectedFile, selectedFile.name);
    this.cf.detectChanges();
  }

  onSubmit(): void {
    this.store.dispatch(updateUser({ id: this.id, user: this.user, form: this.cover }));
    this.changeProfile.emit(true);
  }

  delete(): void {
    this.store.dispatch(deleteUser({ id: this.id }));
    this.router.navigate(["/home"]);
  }
}
