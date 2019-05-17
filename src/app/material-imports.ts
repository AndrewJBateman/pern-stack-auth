import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

// import { WavesModule, ButtonsModule, IconsModule, CarouselModule } from 'angular-bootstrap-md'

@NgModule({
	imports: [
		MatToolbarModule,
		MatButtonModule,
		MatExpansionModule,
		MatCardModule,
		MatDividerModule,
		MatMenuModule,
		MatIconModule
	],
	exports:
	[
		MatToolbarModule,
		MatButtonModule,
		MatExpansionModule,
		MatCardModule,
		MatDividerModule,
		MatMenuModule,
		MatIconModule
	]
})
export class MaterialImports {}
