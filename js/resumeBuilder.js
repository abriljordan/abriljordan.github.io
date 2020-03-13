var bio = {
    "name" : "Abril Jordan Casinillo",
    "role" : "Aspiring QA/Software Engineer",
    "contacts": {
        "mobile" : "0966-355-6805",
        "email" : "accasinillo@up.edu.ph",
        "linkedin" : "in/abriljordancasinillo",
        "github" : "abriljordan",
        "location" : "Cagayan de Oro City"
    },
    "welcomeMessage" : "Hello World!",
    "skills" : [
        "awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
    ],
    "bioPic": "images/ajc.jpg"
}


var education = {
    "schools": [
        {
            "name": "University of Science and Technology of the Southern Philippines",
            "location": "C.M. Recto Avenue, Lapasan, Cagayan de Oro City",
            "degree": "Bachelor's Degree",
            "majors": ["Information Systems and Networking"],
            "dates": 2012,
            "url": "http://www.ustp.edu.ph"
        },
        {
            "name": "Regional Science High School",
            "location": "Gusa, Cagayan de Oro City",
            "degree": "N/A",
            "majors": "N/A",
            "dates": 2000,
            "url": "http://www.rshs10.edu.ph"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Crash Course",
            "school": "Udacity",
            "dates" : 2014,
            "url": "http://www.udacity.com/course/ud8804 "
        }
    ]
}

var work = {
    "jobs": [
        {
            "employer": "University of Science and Technology of the Southern Philippines",
            "title": "Library Assistant" ,
            "dates": "July 17, 2012 - December 20, 2014",
            "description": "1. Installed, maintained, and repaired computer infrastructures. 2. Performed circulation desk procedures, such as checking in and checking out of materials, registering patrons and processed library materials."
        },
        {
            "employer": "REBISCO",
            "title": "Systems Analyst",
            "dates": "March 2014 - March 2017",
            "description": "1. Analyse client’s business requirements and processes through document analysis, interviews, and workflow analysis. 2. Translate stakeholder requirements into tangible deliverables such as functional specifications, user cases, user stories, workflow/process diagrams, data flow/data model diagrams. 3. Collaborated with engineering team in the construction of document storage room, and implement a paper-based filing system for the entire company."
        },
        {
            "employer": "DSWD KALAHI-CIDSS",
            "title": "Monitoring and Evaluation Officer III",
            "dates": "September 2017 - August 2019",
            "description": "1. Lead a team of data entry specialists in collaboration with area coordinators, community facilitators, financial analysts and engineers tasked in data collection for storage and analysis. 2. Ensure consistency in objectives & using success indicators to deliver timely & relevant reports. 3. Responsible for measuring, monitoring & evaluating of projects undertaken by the agency. 4. Conducted orientation & workshop, provided Technical Support to internal users for our in-house developed web-based & desktop application. 5. Provided support to the programmers by providing feedback, suggestions, and report bugs thru a bug tracking/ticketing system."
            
        
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "College Thesis",
            "dates": "2012",
            "description": "Reservation System",
            "images": [
                "link 1",
                "link 2"
            ]
        }
    ]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);


function displaySkills(){
if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);

    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);

    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);

    $("#skills").append(formattedSkill);
    }
}
function displayEducation(){
    for(educ in education.schools){
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[educ].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[educ].degree);
        var formattedSchoolMajor = HTMLschoolDegree.replace("%data%", education.schools[educ].majors);
        var formattedSchoolNameDegreeMajor = formattedSchoolName + formattedSchoolDegree + formattedSchoolMajor;
        $(".education-entry:last").append(formattedSchoolNameDegreeMajor);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[educ].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[educ].dates);
        $(".education-entry:last").append(formattedDates);
    }
}

function displayTopContacts(){   
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    $("#topContacts").append(formattedLinkedin);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
}

function displayWork(){
for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
    }
}


displayEducation();
displayWork();
displaySkills();
displayTopContacts();