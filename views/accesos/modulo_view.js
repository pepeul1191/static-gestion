var ModuloView = Backbone.View.extend({
	el: '#workspace',
	initialize: function(){
		//this.render();
		//console.log("initialize");
		this.events = this.events || {};
    this.tablaModulo =  new TableView(dataTablaModulo);
	},
	events: {
		// se está usando asignacion dinamica de eventos en el constructor
    //eventos tabla de departamentos
    "click #tablaModulo > tfoot > tr > td > button.agregar-fila": "agregarFilaModulo",
		"click #tablaModulo > tfoot > tr > td > button.guardar-tabla": "guardarTablaModulo",
		"keyup #tablaModulo > tbody > tr > td > input.text": "inputTextEscribirModulo",
		"click #tablaModulo > tbody > tr > td > i.quitar-fila": "quitarFilaModulo",
	},
	render: function() {
		this.$el.html(this.getTemplate());
	},
	getTemplate: function() {
		var data = { };
		var template_compiled = null;
		$.ajax({
		   url: STATICS_URL + 'templates/accesos/modulo.html',
		   type: "GET",
		   async: false,
		   success: function(source) {
		   	var template = Handlebars.compile(source);
		   	template_compiled = template(data);
		   }
		});
		return template_compiled;
	},
	mostrarTabla: function(){
		this.tabla.listar();
	},
  //evnetos tabla de departamentos
  inputTextEscribirModulo: function(event){
    this.tablaModulo.inputTextEscribir(event);
  },
  quitarFilaModulo: function(event){
    this.tablaModulo.quitarFila(event);
  },
  guardarTablaModulo: function(event){
    this.tablaModulo.guardarTabla(event);
  },
  agregarFilaModulo: function(event){
    this.tablaModulo.agregarFila(event);
  },
});
