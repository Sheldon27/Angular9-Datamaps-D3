import { Component, OnInit } from '@angular/core';
import * as Datamap from 'node_modules/datamaps/dist/datamaps.usa.min.js';

declare var Datamap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'datamaps-angular9-D3';

  ngOnInit() {
    this.usaMap();
  }

  usaMap() {
    const election = new Datamap({
      scope: 'usa',
      element: document.getElementById('container'),
      geographyConfig: {
        highlightBorderColor: '#bada55',
        popupTemplate: function (geography, data) {
          return '<div class="hoverinfo">' + geography.properties.name +
            ' votes:' + data.votes + '</div>'
        },
        highlightBorderWidth: 3
      },

      fills: {
        'Republican': '#5fb2ce',
        'Democrat': '#86c5da',
        'Heavy Democrat': '#99cfe0',
        'Light Democrat': '#add8e6',
        'Heavy Republican': '#c1e1ec',
        'Light Republican': '#d4ebf2',
        defaultFill: '#d7fffe'
      },
      data: {
        "AZ": {
          "fillKey": "Republican",
          "votes": 5
        },
        "CO": {
          "fillKey": "Light Democrat",
          "votes": 5
        },
        "DE": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "FL": {
          "fillKey": "UNDECIDED",
          "votes": 29
        },
        "GA": {
          "fillKey": "Republican",
          "votes": 32
        },
        "HI": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "ID": {
          "fillKey": "Republican",
          "votes": 32
        },
        "IL": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "IN": {
          "fillKey": "Republican",
          "votes": 11
        },
        "IA": {
          "fillKey": "Light Democrat",
          "votes": 11
        },
        "KS": {
          "fillKey": "Republican",
          "votes": 32
        },
        "KY": {
          "fillKey": "Republican",
          "votes": 32
        },
        "LA": {
          "fillKey": "Republican",
          "votes": 32
        },
        "MD": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "ME": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "MA": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "MN": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "MI": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "MS": {
          "fillKey": "Republican",
          "votes": 32
        },
        "MO": {
          "fillKey": "Republican",
          "votes": 13
        },
        "MT": {
          "fillKey": "Republican",
          "votes": 32
        },
        "NC": {
          "fillKey": "Light Republican",
          "votes": 32
        },
        "NE": {
          "fillKey": "Republican",
          "votes": 32
        },
        "NV": {
          "fillKey": "Heavy Democrat",
          "votes": 32
        },
        "NH": {
          "fillKey": "Light Democrat",
          "votes": 32
        },
        "NJ": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "NY": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "ND": {
          "fillKey": "Republican",
          "votes": 32
        },
        "NM": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "OH": {
          "fillKey": "UNDECIDED",
          "votes": 32
        },
        "OK": {
          "fillKey": "Republican",
          "votes": 32
        },
        "OR": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "PA": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "RI": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "SC": {
          "fillKey": "Republican",
          "votes": 32
        },
        "SD": {
          "fillKey": "Republican",
          "votes": 32
        },
        "TN": {
          "fillKey": "Republican",
          "votes": 32
        },
        "TX": {
          "fillKey": "Republican",
          "votes": 32
        },
        "UT": {
          "fillKey": "Republican",
          "votes": 32
        },
        "WI": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "VA": {
          "fillKey": "Light Democrat",
          "votes": 32
        },
        "VT": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "WA": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "WV": {
          "fillKey": "Republican",
          "votes": 32
        },
        "WY": {
          "fillKey": "Republican",
          "votes": 32
        },
        "CA": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "CT": {
          "fillKey": "Democrat",
          "votes": 32
        },
        "AK": {
          "fillKey": "Republican",
          "votes": 32
        },
        "AR": {
          "fillKey": "Republican",
          "votes": 32
        },
        "AL": {
          "fillKey": "Republican",
          "votes": 32
        }
      }
    });
    election.labels();
  }
}
