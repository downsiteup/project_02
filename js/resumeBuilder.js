
var bio = {
  'name': 'Steven Froehlich',
  'role': 'Frontend Master',
  'contacts': {
    'mobile': '+49 171 2438468',
    'email': 'steven.froehlich@br.de',
    'github': 'downSiteUp',
    'twitter': '@Korresponder',
    'location': 'Munich, Germany'
  },
  'welcomeMessage': 'Es gibt nichts Gutes, ausser man tut es',
  'skills': ['Frontend Entwicklung', 'HTML5', 'CSS3',
              'Barrierefreiheit', 'Browserkompatibilitaet', 'Worpress', 'Bootstrap', 'RWD', 'Graphikdesign', 'Usability', 'Accessibility', 'SASS/LESS', 'SEO', 'Web Performance', 'Version Control', 'Usability Testing'],
  'biopic': 'images/me.jpg',
  'display': function() {
    var name = dataChange(bio.name, HTMLheaderName);
    var role = dataChange(bio.role, HTMLheaderRole);

    appendProperties(bio.contacts, '#topContacts', HTMLcontactGeneric, '%contact%', '%data%');
    $('#topContacts').children().clone().appendTo('#footerContacts');

    $('#header').prepend(role)
                .prepend(name)
                .append(dataChange(bio.biopic, HTMLbioPic))
                .append(dataChange(bio.welcomeMessage, HTMLWelcomeMsg))
                .append(HTMLskillsStart);

    appendObjects(bio.skills, '#skills', HTMLskills, '%data%');
  }
};

var work = {
    'jobs': [
        {
            'employer': 'IsarFunk',
            'title': 'Dispatcher',
            'location': 'Munich',
            'dates': '01/98 - 12/99',
            'description': 'Responsibility for the new GPS-System'
        },
        {
            'employer': 'CDI',
            'title': 'Infromatikkaufmann',
            'location': 'Munich',
            'dates': '01/00 - 04/02',
            'description': 'Training on the IT-Job'
        },
        {
            'employer': 'ADAC',
            'title': 'Host-System Operator',
            'location': 'Munich',
            'dates': '05/02 - 05/05',
            'description': 'Data-handling and -programming on selfgenerated M-Text'
        },
        {
            'employer': 'DonwSiteUp',
            'title': 'Web Developer',
            'location': 'Munich',
            'dates': 'since - 05/06',
            'description': 'Lead of WebSite Department'
        },
        {
            'employer': 'Bayerischer Rundfunk',
            'title': 'FrontEnd Engeneer',
            'location': 'Munich',
            'dates': 'since 06/06',
            'description': 'FrontEnd Master'
        }
    ],
  'display': function() {
    for (var i in this.jobs) {
      $('#workExperience').append(dataChange(i, HTMLworkStart));
      var id = '#work-entry-' + i;
      var job = this.jobs[i];
      $(id).append((dataChange(job.employer, HTMLworkEmployer) + dataChange(job.title, HTMLworkTitle))
           .replace('href="#"', ''))
           .append(dataChange(job.dates, HTMLworkDates))
           .append(dataChange(job.location, HTMLworkLocation))
           .append(dataChange(job.description, HTMLworkDescription));
    }
  }
};

var projects = {
  'projects': [
      {
          'title': 'BR-Podcastcenter',
          'dates': '07/06 - 08/07',
          'description': 'Hosting all the BR Podcast-Content on its own plattform',
          'images': 'images/podcastcenter.jpg'
      },
      {
          'title': 'Yuranga',
          'dates': '12/07 - 08/09',
          'description': 'Launching the new CMS called TeamSite for BR.de',
          'images': 'images/yuranga.jpg'
      },
      {
          'title': 'Sophora',
          'dates': '12/09 - 02/11',
          'description': 'Launching the new CMS called Sophora for BR.de',
          'images': 'images/sophora.jpg'
      },
      {
          'title': 'BR-Mediathek',
          'dates': '10/11 - 04/13',
          'description': 'Hosting all the BR Video- and Audio-Content on its own plattform',
          'images': 'images/br-mediathek.jpg'
      },
      {
          'title': 'BR2GO',
          'dates': '08/13 - 04/15',
          'description': 'Transforming the huge www.BR.de into a modern responsive Website',
          'images': 'images/br2go.jpg'
      }
  ],
  'display': function() {
    for (var i in this.projects) {
      $('#projects').append(dataChange(i, HTMLprojectStart));
      var id = '#project-entry-' + i;
      var project = this.projects[i];
      $(id).append(dataChange(project.title, HTMLprojectTitle))
           .append(dataChange(project.dates, HTMLprojectDates))
           .append(dataChange(project.description, HTMLprojectDescription))
           .append(dataChange(project.images, HTMLprojectImage));

    }
  }
};

var education = {
    'schools': [
        {
            "name": "CDI",
            "location": "Munich",
            "degree": "Informatikkaufmann",
            "majors": [
                "Economic, IT"
            ],
            "dates": 2000,
            "URL": "http://www.multimedia.de/ausbildung/institution/id/711/"
        }
    ],

    'onlineCourses': [
        {
            'title': 'Responsive Web Development',
            'school': 'Macromedia',
            'date': 2012,
            'url': 'http://www.macromedia.de'
        }
    ],
    'display': function() {
        for (var i in this.schools) {
            $('#education').append(dataChange(i, HTMLschoolStart));
            var id = '#school-entry-' + i;
            var school = this.schools[i];
            $(id).append((dataChange(school.name, HTMLschoolName) + dataChange(school.degree, HTMLschoolDegree))
                .replace('#', school.url))
                .append(dataChange(school.dates, HTMLschoolDates))
                .append(dataChange(school.location, HTMLschoolLocation))
                .append(dataChange(school.majors, HTMLschoolMajor));

        for (var j in this.onlineCourses) {
            $('#education').append(HTMLonlineClasses);
            $('#education').append(dataChange(j, HTMLonlineStart));
            var id = '#online-entry-' + j;
            var online = this.onlineCourses[j];
            $(id).append(dataChange(online.title, HTMLonlineTitle) + dataChange(online.school, HTMLonlineSchool))
                .append(dataChange(online.date, HTMLonlineDates))
                .append(dataChange(online.url, HTMLonlineURL).replace('#', online.url));
            }
        }
    }
};

var dataChange = function(data, sizer, dataPlaceholder) {
    dataPlaceholder = dataPlaceholder || '%data%';
    return sizer.replace(dataPlaceholder, data);
};

var appendProperties = function(object, location, sizer, propertyPosition, valuePosition) {
    for (var property in object) {
        var value = object[property];
        var data = sizer.replace(propertyPosition, property)
            .replace(valuePosition, value);
        $(location).append(data);
    }
};

var appendObjects = function(list, location, sizer, valuePlaceholder) {
    for (var key in list) {
        $(location).append(sizer.replace(valuePlaceholder, list[key]));
    }
};

bio.display();
education.display();
work.display();
projects.display();
$('#mapDiv').append(googleMap);

