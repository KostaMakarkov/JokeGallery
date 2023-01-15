import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/Classes/Joke/joke';
import { jokes } from 'src/assets/jokes';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { JokePopUpComponent } from '../joke-pop-up/joke-pop-up.component';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'app-jokes-gallery',
  templateUrl: './jokes-gallery.component.html',
  styleUrls: ['./jokes-gallery.component.scss'],
})
export class JokesGalleryComponent implements OnInit {
  constructor(public dialog: MatDialog,     private localStorage: LocalStorageService,
    private router: Router) {}

  openDialog(
    joke: Joke,
    enterAnimationDuration: string = '0ms',
    exitAnimationDuration: string = '0ms'
  ): void {
    this.dialog.open(JokePopUpComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        joke: joke,
        jokeArray: this.jokesArray,
      },
    });
  }

  logOut() {
    this.localStorage.clearLocal();
    this.router.navigate(['/']);
  }

  public jokesArray: Joke[] = [];

  generateRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  }

  invertColor(hex: string) {
    if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    if (hex.length !== 6) {
      hex += 0;
    }
    // invert color components
    const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
      g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
      b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + this.padZero(r) + this.padZero(g) + this.padZero(b);
  }

  padZero(str?: string, len?: number) {
    len = len || 2;
    const zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
  }

  ngOnInit(): void {
    this.jokesArray = jokes.map((jk) => {
      const joke = new Joke(jk);
      joke.background = this.generateRandomColor();
      return joke;
    });
  }
}
