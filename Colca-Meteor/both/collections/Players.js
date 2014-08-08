/**
 * Created by macbookpro on 08/08/14.
 */

Players = new SimpleSchema ({
    Name: {
            type: String,
            label: "Nombre",
            max: 400
    },
    Age:{
            type: Number,
            label: "Edad",
            min:15,
            optional:true
    },
    Team:{
            type: String,
            label: "Equipo",
            max: 200
    }
});
