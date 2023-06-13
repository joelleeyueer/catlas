import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'google-maps';
  private map: google.maps.Map | undefined;

  ngOnInit(): void {
    const loader = new Loader({
      apiKey: 'AIzaSyDXy7SLzzZRQJyDba-z8DGqWXD-8xHQVhQ', // Replace with your own API key
      version: "weekly",
    });

    loader.load().then(() => {
      console.log("Google Maps loaded");
      const location = {
        lat: 2.5035,
        lng: 102.8208
      }

      this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: location,
        zoom: 15
      });


      
    });
  }

  // getCurrentLocation(): void {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const latitude = position.coords.latitude;
  //         const longitude = position.coords.longitude;
  //         console.log("Latitude: " + latitude);
  //         console.log("Longitude: " + longitude);
  //         // Do something with the latitude and longitude values
  //       },
  //       (error) => {
  //         console.log("Error occurred while retrieving location: ", error);
  //       }
  //     );
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // }

  
}
