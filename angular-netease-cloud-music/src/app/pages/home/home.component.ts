import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NzCarouselComponent } from "ng-zorro-antd";
import { map } from "rxjs/internal/operators";
import { SheetService } from "src/app/services/sheet.service";
import {
  Banner,
  HotTag,
  Singer,
  SongSheet,
} from "../../services/data-types/common.types";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"],
})
export class HomeComponent implements OnInit {
  carouselActiveIndex: number = 0;
  banners: Banner[];
  hotTags: HotTag[];
  songSheetsList: SongSheet[];
  singers: Singer[];

  @ViewChild(NzCarouselComponent, { static: true })
  private nzCarousel: NzCarouselComponent;
  constructor(
    private route:ActivatedRoute,
    private sheetServe: SheetService
  ) {
    this.route.data.pipe(map(res => res.homeDatas)).subscribe(([banners,hotTags,songSheetsList,singers])=>{
      this.banners = banners;
      this.hotTags = hotTags;
      this.songSheetsList = songSheetsList;
      this.singers = singers;
    })
  }

  ngOnInit() {}

  onBeforeChange({ to }) {
    this.carouselActiveIndex = to;
  }

  onChangeSlide(type: "pre" | "next") {
    this.nzCarousel[type]();
  }

  onPlaySheet(id:number){
    console.log('id:',id);
    this.sheetServe.platSheet(id).subscribe(res=>console.log(res))
  }
}
