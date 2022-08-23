import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
    }
  }

  handleLand() {
    window.alert('Are you sure the shuttle is ready to land?');
    {
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = 'Shuttle has landed.';
    }
  }

  handleAbort() {
    window.alert('Are you sure the shuttle is ready to abort?');
    {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      this.message = 'Shuttle is aborted.';
    }
  }

  moveRocket(image, direction) {
    if (direction === 'right') {
      let movement = parseInt(image.style.left) + 10 + 'px';
      image.style.left = movement;
      this.width = this.width + 10000;
    }

    if (direction === 'left') {
      let movement = parseInt(image.style.left) - 10 + 'px';
      image.style.left = movement;
      this.width = this.width - 10000;
    }

    if (direction === 'up') {
      let movement = parseInt(image.style.bottom) + 10 + 'px';
      image.style.bottom = movement;
      this.height = this.height + 10000;
    }
    if (direction === 'down') {
      let movement = parseInt(image.style.bottom) - 10 + 'px';
      image.style.bottom = movement;
      this.height = this.height - 10000;
    }
  }
}

