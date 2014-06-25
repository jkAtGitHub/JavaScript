###JavaScript
==========
##Restaurant GIS Analytics
####Find the application at:
*http://s3-us-west-2.amazonaws.com/jayakrishnan.consultation.projects/index.html*

- Maps the potential for starting a new restaurant in Chennai based on wardwise data
- Uses drive time buffers from existing restaurants to determine competition
- Use fluid interface and google charts API to display the relevant data in charts
- Developed using ArcGIS API for JavaScript 
- JavaScript coded in AMD model employing dojo framework widely along with HTML5 elements
 
####Background:
- Wards are sub-units in a city
- The city for which mapping is done is Chennai, India
- Potential for a ward based on demographic profiling and current prevalence of hotels 
- Classification of hotel based on cost derived from Google Places API - All hotels are categorized as Low Afffordability, Moderate Affordability, High Affordability, And Exquiste Affordability
- Drive times polygons from existing hotels are used to derive competition
- Break values of Drive times polygons are 1min, 3 min, 5min, >7 mins, with lesser break value indicating higher competition

####Functionalities:

- Zoom to a ward level by typing or Selecting a ward name from a datalist
- Render wards based on the potential for a particular affordability
- GoogleCharts and InfoPopup shows potential percentages across all affordability levels
- Overlaying drive time polygons
- Infowindow to show the competition levels as well as potential percentage at a particular clicked location

