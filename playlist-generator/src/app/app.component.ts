import { Component, Input } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="page-wrapper">
      <img
        src="assets/spotify-logo.png"
        width="400"
        height="150"
        alt="spotify logo"
      />
      <div class="input-wrapper">
        <div class="container">
          <mat-form-field class="example-full-width" appearance="standard">
            <mat-label>Artist(s)</mat-label>
            <input
              matInput
              placeholder="Enter Artist(s)"
              [value]="artistsVal"
            />
          </mat-form-field>
          <button style="maxHeight: 35px" mat-flat-button color="primary">
            Generate Playlist
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .page-wrapper {
        background: black;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .input-wrapper {
        border-radius: 25px;
        border: 2px solid #1ab26b;
        background: #22f67966;
        padding: 30px;
        margin-top: 15px;
        width: 50%;
        min-height: 400px;
      }
      .container {
        display: flex;
        justify-content: center;
        padding: 30px;
        flex-direction: column;
      }
    `,
  ],
})
export class AppComponent {
  title = "playlist-generator";
  @Input() artistsVal: string = "";
}
