module.exports = function main(inputs) {
    // write your code here...
	var way_price=6.0 ,park_price=0.25*inputs.parkTime;
	if (inputs.distance-2>0) 
		if(inputs.distance<=8)
			way_price=way_price+0.8*(inputs.distance-2);
		else
			way_price=way_price+0.8*6+1.2*(inputs.distance-8);
	var price=way_price+park_price;
	price=price.toFixed(0);
	
    return Number(price);
};
