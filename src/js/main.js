
$(document).ready(function() {
	var face = Snap("#heads_head2_0_Layer1_1_FILL")
	var faceColour = face.select('path:nth-child(1)');

	var arms = Snap("#arm_colour_0_Layer1_0_FILL")
	var armColour = arms.select('path:nth-child(2)');

	var body = Snap("#male_assets_male_body_colour_0_Layer1_0_FILL")
	var bodyColour = body.select('path:nth-child(2)');

	/**
	 * Left and right controls
	 */
	$('.selector-right').on("click", function(){
		console.log(face);
		faceColour.attr({
		    fill: "#A7866E",
		})
		armColour.attr({
		    fill: "#A7866E",
		})
		bodyColour.attr({
		    fill: "#A7866E",
		})
	})
	$('.selector-left').on("click", function(){
		faceColour.attr({
		    fill: "#FFF",
		})
		armColour.attr({
		    fill: "#FFF",
		})
		bodyColour.attr({
		    fill: "#FFF",
		})
	})


})
