import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/br-app/services/auth/authentication.service";

@Component({
  selector: "br-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              private router: Router,
              private cf: ChangeDetectorRef) {
              }

  ngOnInit(): void {
    return;
  }

  isAuth(): void {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(["/login"]);
      this.cf.detectChanges();
    } else {
      this.router.navigate(["/profile"]);
      this.cf.detectChanges();
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(["/home"]);
    this.cf.detectChanges();
  }

  isAuthDrop(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }
      return false;


  }

}
