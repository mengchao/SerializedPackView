
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
var sampleJasonData = eval('[{"serialId":"0001", "parentId":"0", "item":"masterItem1","desc":"masterItem1 desc","um":"BX"},{"serialId":"0002", "parentId":"0001", "item":"childItem2","desc":"childItem2 desc","um":"EA"},{"serialId":"0003", "parentId":"0001", "imageSrc":"images/Desktop.png", "item":"childItem3","desc":"childItem3 desc","um":"EA"},{"serialId":"0004", "parentId":"0001", "item":"childItem4","desc":"childItem4 desc","um":"EA"},{"serialId":"0005", "parentId":"0004", "item":"grandchildItem1","desc":"grandchildItem1 desc","um":"PC"},{"serialId":"0006", "parentId":"0004", "item":"grandchildItem2","desc":"grandchildItem2 desc","um":"PC"},{"serialId":"0007", "parentId":"0002", "item":"grandchildItem3","desc":"grandchildItem3 desc","um":"PC"}]');


/**
*  use serial id to get current element 
*  @param   {String}    serialId   
*  @return  {json}      json  
*/
function getCurrentElem(serialId){
	for(var i = 0 ; i < sampleJasonData.length; i++){
		console.log("length: "  + sampleJasonData.length);
		if (sampleJasonData[i].serialId == serialId){
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
		if (sampleJasonData[i].serialId == serialId){
			for(var j = 0 ; j < sampleJasonData.length; j++){
			   if (sampleJasonData[i].parentId == sampleJasonData[j].serialId){
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
		if (sampleJasonData[i].serialId == serialId){
			for(var j = 0 ; j < sampleJasonData.length; j++){
			   if (sampleJasonData[j].parentId == sampleJasonData[i].serialId){
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
		if (sampleJasonData[i].serialId == serialId){
			for(var j = 0 ; j < sampleJasonData.length; j++){
			   if (sampleJasonData[j].parentId == sampleJasonData[i].parentId 
			       && sampleJasonData[j].serialId > sampleJasonData[i].serialId ){
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
		if (sampleJasonData[i].serialId == serialId){
			for(var j = 0 ; j < sampleJasonData.length; j++){
			   if (sampleJasonData[j].parentId == sampleJasonData[i].parentId 
			       && sampleJasonData[j].serialId < sampleJasonData[i].serialId ){
			      return sampleJasonData[j];
			   }		
			}	
		} 
	}
}

/**   
 * conver JSON to tree structure   
 * @param   {json}      jasonObject   
 * @param   {String}    serialId   
 * @param   {String}    parentId
 * @param   {String}    children 
 * @return  {Array}     array   
 */ 
function transData(jasonObject, serialId, parentId, children){    
    var arrayTree = [];
    var	hash = {};
	var i = 0, j = 0, len = jasonObject.length; 
    for(; i < len; i++){    
        hash[jasonObject[i][serialId]] = jasonObject[i];    
    }    
    for(; j < len; j++){    
        var aVal = jasonObject[j], hashVP = hash[aVal[parentId]];		
        if(hashVP){    
            !hashVP[children] && (hashVP[children] = []);    
            hashVP[children].push(aVal);    
        }else{    
            arrayTree.push(aVal);    
        }    
    }    
    return arrayTree;    
}

/*
* load tree to display item structure
*/

var sampleTreeData = [{id: 62000001, parentId: null, item: "Desktop", weight: "13.5kg"},{id: 62000002, parentId: 62000001, item: "Moniter", weight: "2.5kg" },{ id: 62000003, parentId: 62000001, item: "Mouse", weight: "0.05kg" },{ id: 62000004, parentId: 62000001, item: "Case", weight: "5.5kg" },{ id: 62000005, parentId: 62000004, item: "Cpu", weight: "0.01kg" },{ id: 62000006, parentId: 62000004, item: "Hard Disk", weight: "0.2kg" },{ id: 62000007, parentId: 62000004, item: "Hard Disk", weight: "0.2kg" },{ id: 62000008, parentId: 62000004, item: "Hard Disk", weight: "0.2kg" },{ id: 62000009, parentId: 62000004, item: "Hard Disk", weight: "0.2kg" },{ id: 62000010, parentId: 62000004, item: "Hard Disk", weight: "0.2kg" },{ id: 62000011, parentId: 62000004, item: "Hard Disk", weight: "0.2kg" }];

var loadTree = function () {      
    $("#treeList").kendoTreeList({
        columns: [
            { field: "id",  width: 200},
            { field: "item", width: 150 },
            { field: "weight", width: 150 }
        ],
        columnMenu: true,
        dataSource: sampleTreeData
        
    });
       
    var treeList = $("#treeList").data("kendoTreeList");
};
