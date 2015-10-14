
/*
Data Structure :
Element{
	serialId ,
	parentId ,
	item ,
	desc ,
	um ,
	...
}
*/

/*sample data
                   0001
			 ________|________
	        |        |        |  
		   0002    0003      0004
            |             ____|_____
           0007          |          |
                       0005       0006


*/
var sampleJasonData = [{
	id: 62000001,
	parentId: null,
	item: "Desktop",
	weight: "13.5kg",
	price: "$999",
	shipping_date: "09/30/15",
	imgSrc: "images/Desktop.png"
}, {
	id: 62000002,
	parentId: 62000001,
	item: "Monitor",
	weight: "2.5kg",
	brand: "DELL",
	color: "black",
	product_dimensions: "23.6 inches",
	resolution: "1920 x 1080",
	imgSrc: "images/monitor.jpg"
}, {
	id: 62000003,
	parentId: 62000001,
	item: "Mouse",
	weight: "0.165kg",
	brand: "Logitech",
	color: "soliver",
	product_dimensions: "131*38*77(mm)",
	wireless: "yes",
	imgSrc: "images/mouse.jpg"
}, {
	id: 62000004,
	parentId: 62000001,
	item: "Case",
	weight: "5.5kg",
	brand: "DELL",
	color: "Black",
	product_dimensions: "433*102*360(mm)",
	imgSrc: "images/case.jpg"
}, {
	id: 62000005,
	parentId: 62000001,
	item: "Key Board",
	weight: "0.9kg",
	brand: "BenQ",
	type: "KX890",
	color: "Black",
	product_dimensions: "440*133*37(mm)",
	imgSrc: "images/KeyBoard.jpg"
}, {
	id: 62000006,
	parentId: 62000004,
	item: "Hard Disk",
	weight: "1.5kg",
	brand: "Samsung",
	product_dimensions: "145*100*19(mm)",
	capacity: "1T",
	imgSrc: "images/HardDisk.jpg"
}, {
	id: 62000007,
	parentId: 62000004,
	item: "CPU",
	weight: "0.3kg",
	brand: "Inter",
	type: "i7-4790K",
	CPU_Model_Speed: "4GHz",
	Processor_Count: "4",
	imgSrc: "images/cpu.jpg"
}, {
	id: 62000008,
	parentId: 62000004,
	item: "Memory",
	weight: "0.15kg",
	brand: "Kingston",
	type: "204-Pin DDR3 SODIMM",
	Capacity: "4GB",
	imgSrc: "images/memory.jpg"
}];

/**
*  use serial id to get current element 
*  @param   {String}    serialId   
*  @return  {json}      json  
*/
function getCurrentElem(serialId){
	for(var i = 0 ; i < sampleJasonData.length; i++){
		console.log("length: "  + sampleJasonData.length);
		if (sampleJasonData[i].id == serialId){
			return sampleJasonData[i];
		} 
	}
}

/**
*  use serial id to get parent element 
*  @param   {String}    serialId   
*  @return  {json}      json  
*/
function getParentElem(serialId){
	for(var i = 0 ; i < sampleJasonData.length; i++){
		if (sampleJasonData[i].id == serialId){
			for(var j = 0 ; j < sampleJasonData.length; j++){
			   if (sampleJasonData[i].parentId == sampleJasonData[j].id){
			      return sampleJasonData[j];
			   }			
			}	
		} 
	}
}

/**
*  use serial id to get first child element 
*  @param   {String}    serialId   
*  @return  {json}      json  
*/
function getFirstChild(serialId){
	for(var i = 0 ; i < sampleJasonData.length; i++){
		if (sampleJasonData[i].id == serialId){
			for(var j = 0 ; j < sampleJasonData.length; j++){
			   if (sampleJasonData[j].parentId == sampleJasonData[i].id){
			      return sampleJasonData[j];
			   }			
			}	
		} 
	}
}

/**
*  use serial id to get next sibling 
*  @param   {String}    serialId   
*  @return  {json}      json  
*/
function getNextSibling(serialId){
	for(var i = 0 ; i < sampleJasonData.length; i++){
		if (sampleJasonData[i].id == serialId){
			for(var j = 0 ; j < sampleJasonData.length; j++){
			   if (sampleJasonData[j].parentId == sampleJasonData[i].parentId 
			       && sampleJasonData[j].id > sampleJasonData[i].id ){
			      return sampleJasonData[j];
			   }		
			}	
		} 
	}
}

/**
*  use serial id to get previous sibling 
*  @param   {String}    serialId   
*  @return  {json}      json  
*/
function getPrevSibling(serialId){
  
	for(var i = 0 ; i < sampleJasonData.length; i++){
		if (sampleJasonData[i].id == serialId){
			for(var j = sampleJasonData.length-1 ; j > 0 ; j--){
			   if (sampleJasonData[j].parentId == sampleJasonData[i].parentId 
			       && sampleJasonData[j].id < sampleJasonData[i].id ){
			      return sampleJasonData[j];
			   }		
			}	
		} 
	}
}

/*
* load tree to display item structure
*/

var loadTree = function () {      
    $("#treeList").kendoTreeList({
        columns: [
            { field: "id",  width: 200},
            { field: "item", width: 150 },
            { field: "weight", width: 150 }
        ],
        columnMenu: true,
        dataSource: sampleJasonData
        
    });
       
    var treeList = $("#treeList").data("kendoTreeList");
};
