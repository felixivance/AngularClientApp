import { Component, OnInit } from '@angular/core';
import { SettingsService} from '../../services/settings.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Settings } from '../../models/settings'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings:Settings;
  constructor(public router:Router, public settingsService:SettingsService, public flashMessagesService:FlashMessagesService) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
    
  }

}
