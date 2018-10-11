import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public tiles: Array<any>;
  constructor() { }

  public showOptionsToUser(i: number): void {
    document.getElementById('open-'+i).style.display = 'block';
    document.getElementById('print-'+i).style.display = 'block';
    document.getElementById('trash-'+i).style.display = 'block';
    document.getElementById('block-'+i).style.opacity = '0.7';
  }
  public hideOptionsToUser(i: number): void {
    document.getElementById('open-'+i).style.display = 'none';
    document.getElementById('print-'+i).style.display = 'none';
    document.getElementById('trash-'+i).style.display = 'none';
    document.getElementById('block-'+i).style.opacity = '1';
  }

  public deleteTile(tileNumber: number): void {
    this.tiles = this.tiles.filter(item => item.tileNumber !== tileNumber);
  }
  public ngOnInit(): void {
    this.tiles =[
      {
        "tileNumber": 0,
        "title": "Tile-1",
        "description": "The header and text paragraph (title/short description) should be in a block – the header should be preceded by an icon and the entire block should have an image background. • A transparent overlay with block manipulation options should be shown on “mouse over” (open, delete, print)"
      },
      {
        "tileNumber": 1,
        "title": "Tile-2",
        "description": "The header and text paragraph (title/short description) should be in a block – the header should be preceded by an icon and the entire block should have an image background. • A transparent overlay with block manipulation options should be shown on “mouse over” (open, delete, print)"
      },
      {
        "tileNumber": 2,
        "title": "Tile-3",
        "description": "The header and text paragraph (title/short description) should be in a block – the header should be preceded by an icon and the entire block should have an image background. • A transparent overlay with block manipulation options should be shown on “mouse over” (open, delete, print)"
      },
      {
        "tileNumber": 3,
        "title": "Tile-4",
        "description": "The header and text paragraph (title/short description) should be in a block – the header should be preceded by an icon and the entire block should have an image background. • A transparent overlay with block manipulation options should be shown on “mouse over” (open, delete, print)"
      },
      {
        "tileNumber": 4,
        "title": "Tile-5",
        "description": "The header and text paragraph (title/short description) should be in a block – the header should be preceded by an icon and the entire block should have an image background. • A transparent overlay with block manipulation options should be shown on “mouse over” (open, delete, print)"
      },
      {
        "tileNumber": 5,
        "title": "Tile-6",
        "description": "The header and text paragraph (title/short description) should be in a block – the header should be preceded by an icon and the entire block should have an image background. • A transparent overlay with block manipulation options should be shown on “mouse over” (open, delete, print)"
      }
    ]
  }

}
