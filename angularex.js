//Model
var model = new Backbone.Model({
	name: ''
})

//view
model.on('change:name', function(){
	$('#nameSpan').html(model.get('name'))
});

//controller
$('#textInput').on('keyup', function(){
	model.set('name', $('#textInput').val())
});