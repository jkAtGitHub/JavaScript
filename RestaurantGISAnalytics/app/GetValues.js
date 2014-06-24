define(function()
{
return {
        getColor: function(val){
           if (val <= 25) return "green";
            else if (val <= 50) return "yellow";
            else if (val <= 75) return "orange";
            else return "red";
        },
 
        getCompetition: function(val){
           if (val == 1) return "VERY HIGH COMPETITION (<1 min drive-time)";
            else if (val == 3) return "HIGH COMPETITION (<3 min drive-time)";
            else if (val == 5) return "MODERATE COMPETITION (<5 min drive-time)";
            else if (val == 7) return "LOW COMPETITION (<7 min drive-time)";
            else return "VERY LOW COMPETITION (>7 min drive-time)";
        },
 
        getAnnotation: function(val){
             if (val <= 25) return (val.toString() + "%(Low)");
            else if (val <= 50) return (val.toString() + "%(Medium)");
            else if (val <= 75) return (val.toString() + "%(High)");
            else return (val.toString() + "%(Very high)");
        },
    
    getPotential: function (val) {
            if (val <= 25) return "LOW POTENTIAL(" + val + "%)";
            else if (val <= 50) return "MEDIUM POTENTIAL(" + val + "%)";
            else if (val <= 75) return "HIGH POTENTIAL(" + val + "%)";
            else return "VERY HIGH POTENTIAL(" + val + "%)";
        }
      
       
    };
});


