import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {  Store } from "@ngrx/store";
import { BehaviorSubject, takeUntil } from "rxjs";
import { RxUnsubscribe } from "src/br-app/rx-unsubscribe";
import { deleteUser, getUsers } from "src/br-app/store/actions/user.action";
import { selectUsers } from "src/br-app/store/selectors/user.selectors";
import { User } from "src/models/user.model";

@Component({
  selector: "br-users-table",
  templateUrl: "./users-table.component.html",
  styleUrls: ["./users-table.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersTableComponent extends RxUnsubscribe implements OnInit {

  public displayedColumns: string[] = ["id", "name", "username", "email", "role", "delete"];
  public dataSource: User[];
  private flag: boolean = false;
  private subscription = new BehaviorSubject(this.flag);

  constructor(private store: Store,
              private cf: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.getUserList();
    this.cf.detectChanges();
  }

  getUserList(): void{
    this.store.dispatch(getUsers({ page: 1, limit: 10 }));
    this.store.select((selectUsers))
    .pipe(takeUntil(this.destroy$))
    .subscribe(
          (data) => {
            this.dataSource = data?.items;
            this.cf.markForCheck();
          },
      );
    this.subscription.next(false);

  }

  delete(id: number): void {
    this.store.dispatch(deleteUser({ id }));
    this.getUserList();
    this.subscription.next(true);
    this.cf.detectChanges();
  }

}
