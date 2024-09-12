import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../../services/test-service.service';

@Component({
  selector: 'app-display-title',
  templateUrl: './display-title.component.html',
  styleUrl: './display-title.component.scss'
})
export class DisplayTitleComponent implements OnInit {

  displayData: Array<any> = [];

  constructor(private testService: TestServiceService) {}

  ngOnInit(): void {
      this.testService.getData().subscribe(data => {
        console.log(data);
        this.displayData = data;
      });
  }
}
