import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {  Store } from "@ngrx/store";
import { BehaviorSubject, ReplaySubject, takeUntil } from "rxjs";
import { AuthenticationService } from "src/br-app/services/auth/authentication.service";
import { logout } from "src/br-app/store/actions/auth.action";
import { getUser } from "src/br-app/store/actions/user.action";
import { selectLoginUser } from "src/br-app/store/selectors/user.selectors";
import { WINDOW } from "src/br-app/window-token";
import { User, UserRole } from "src/models/user.model";

@Component({
  selector: "br-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class UserProfileComponent implements OnInit, OnDestroy {

  public user: User;
  private id: number;
  public origin = this.window.location.origin;
  private subscription = new BehaviorSubject(false);
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);


  constructor(private store: Store,
              private router: Router,
              private authService: AuthenticationService,
              private cf: ChangeDetectorRef,
              @Inject(WINDOW) private window: Window) {
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
        this.user = data;
        this.cf.markForCheck();
      },
  );
   this.subscription.next(false);
  }



  logout(): void{
    this.store.dispatch(logout());
    this.router.navigate(["/home"]);
  }

  isAdmin(): boolean{
    const role = this.authService.getUserRole();
    if (role === UserRole.ADMIN) {
      return true;
    }
      return false;

  }

  isUser(): boolean {
    const role = this.authService.getUserRole();
    if (role === UserRole.USER) {
      return true;
    }
      return false;

  }


  get runChangeDetection(): void {
    return;
  }

  profileChange(flag: boolean): void {
    this.subscription.next(flag);
    this.getUserInfo(this.id);
    this.cf.markForCheck();
  }
 }
