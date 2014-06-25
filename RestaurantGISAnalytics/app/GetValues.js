define([ "dojo/_base/declare","esri/lang","app/clsContainer"],function(declare,esriLang, Container)
{
return  {
    
    contructor: function()
    {
    },
        getColor: function(val){
           if (val <= 25) return "green";
            else if (val <= 50) return "yellow";
            else if (val <= 75) return "orange";
            else return "red";
        },
 
        getCompetition: function(val){
            val = parseInt(val);
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
    getDialogContent: function(evt, Potential1, Potential2, Potential3, Potential4) {
         
        var t = "<b>Potential for ${name}</b><hr><b>Low Cost: </b>" + parseInt(Potential1) + "%<br>"
            + "<b>Merate Cost: </b>" + parseInt(Potential2) + "%<br>"
            + "<b>High Cost: </b>" + parseInt(Potential3) + "%<br>"
            + "<b>Exquisite: </b>" + parseInt(Potential4) + "%<br>";
        return esriLang.substitute(evt.graphic.attributes,t); 
        },     
    
    getPotential: function (val) {
        val = parseInt(val);
            if (val <= 25) return "LOW POTENTIAL(" + val + "%)";
            else if (val <= 50) return "MEDIUM POTENTIAL(" + val + "%)";
            else if (val <= 75) return "HIGH POTENTIAL(" + val + "%)";
            else return "VERY HIGH POTENTIAL(" + val + "%)";
        }, 
    getDriveTimeInfoWindowContent: function(selectedWardName, MaxDriveTime, PotentialValues, AffordabilityDesc)
    {
        var content = "The clicked location in<h3> <b>" + selectedWardName + "</b></h3> has a <h3><b>" + this.getCompetition(MaxDriveTime) + "</b></h3> and <h3><b>" + this.getPotential(PotentialValues) + "</b></h3> for starting a restaurant business in the affordability category :<h3> <b>" + AffordabilityDesc + "</b></h3>";
        
        return content;
    },
    
    getChartDataAsArray: function (Potential1, Potential2, Potential3, Potential4) {
        
        var contentsArray = [];
        var header = []; 
        var lowAfford = [];
        var ModerateAfford = [];
        var HighAfford = [];
        var ExquisiteAfford = [];
        
        header.push('Affordability Level');
        lowAfford.push('Low');
        ModerateAfford.push('Moderate');
        HighAfford.push('High');
        ExquisiteAfford.push('Exquisite');
        
         header.push('Potential');
        lowAfford.push(parseFloat(Potential1));
        ModerateAfford.push(parseFloat(Potential2));
        HighAfford.push(parseFloat(Potential3));
        ExquisiteAfford.push(parseFloat(Potential4));
        
        header.push({ role: 'style' });
        lowAfford.push(this.getColor(parseInt(Potential1)));
        ModerateAfford.push(this.getColor(parseInt(Potential2)));
        HighAfford.push(this.getColor(parseInt(Potential3)));
        ExquisiteAfford.push(this.getColor(parseInt(Potential4)));
        
        header.push({ role: 'annotation' });
          lowAfford.push(this.getAnnotation(parseInt(Potential1)));
        ModerateAfford.push(this.getAnnotation(parseInt(Potential2)));
        HighAfford.push(this.getAnnotation(parseInt(Potential3)));
        ExquisiteAfford.push(this.getAnnotation(parseInt(Potential4)));
        
        contentsArray.push(header, lowAfford, ModerateAfford, HighAfford, ExquisiteAfford);
        return contentsArray;
    }
    };
});


