import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "br-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

 // constructor() { }

  ngOnInit(): void {
    const i = 1;
    console.log(i);
  }

}
