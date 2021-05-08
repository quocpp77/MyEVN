import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';

import { MaterialsModule } from './materials.module';

import { FooterComponent } from '../components/shared/footer/footer.component';
import { SidebarComponent } from '../components/shared/sidebar/sidebar.component';
import { HeaderComponent } from '../components/shared/header/header.component';

import { AreaComponent } from '../components/shared/widgets/area/area.component';
import { CardComponent } from '../components/shared/widgets/card/card.component';
import { PieComponent } from '../components/shared/widgets/pie/pie.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    CardComponent,
    PieComponent
  ],
  imports: [
    CommonModule,

    MaterialsModule,

    FlexLayoutModule,
    HighchartsChartModule,

    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    CardComponent,
    PieComponent
  ]
})
export class SharedModule { }
