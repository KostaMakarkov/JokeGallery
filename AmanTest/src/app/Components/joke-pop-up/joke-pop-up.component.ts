import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Joke } from 'src/app/Classes/Joke/joke';

@Component({
  selector: 'app-joke-pop-up',
  templateUrl: './joke-pop-up.component.html',
  styleUrls: ['./joke-pop-up.component.scss'],
})
export class JokePopUpComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { joke: Joke; jokeArray: Joke[] },
    public dialogRef: MatDialogRef<JokePopUpComponent>,
  ) {}

  public selectedJoke: Joke;
  public allJokes: Joke[] = [];
  public jokeFlags: string[];

  getFlagState(flag: string, index: number) {
    return Object.values(this.selectedJoke.flags)[index];
  }



  getRelatedJokes(joke: Joke) {
    if (this.allJokes) {
      if (joke.type === 'single') {
        const additional = this.allJokes.filter(
          (jk) => jk.type === joke.type && joke.joke !== jk.joke
        );
        return [
          additional[Math.floor(Math.random() * additional.length)],
          additional[Math.floor(Math.random() * additional.length)],
          additional[Math.floor(Math.random() * additional.length)],
          additional[Math.floor(Math.random() * additional.length)],
        ];
      } else {
        const additional = this.allJokes.filter(
          (jk) => jk.type === joke.type && joke.setup !== jk.setup
        );
        return [
          additional[Math.floor(Math.random() * additional.length)],
          additional[Math.floor(Math.random() * additional.length)],
          additional[Math.floor(Math.random() * additional.length)],
          additional[Math.floor(Math.random() * additional.length)],
        ];
      }
    } else {
      return [];
    }
  }

  closeDialog() {
    this.dialogRef.close('close!');
  }

  ngOnInit(): void {
    this.selectedJoke = this.data.joke;
    this.allJokes = this.data.jokeArray;
    this.jokeFlags = Object.keys(this.selectedJoke.flags);
  }
}
