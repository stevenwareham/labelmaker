//========== Label Maker!============\\
/* This Photoshop script will re-label label layers. To create labels, first create label "(a)" preferably with an action.
    Then move this label into postion. Copy this lable and move it into the "(b)" label position. Keep doing this until 
    you have as many lables as you need. Then run this script to change the contents of the labels to what they should be.
*/

var myDocument = app.activeDocument;
var myTotalLayers = myDocument.artLayers.length;
myTotalLayers = myTotalLayers - 1;
myLabelTotal = myTotalLayers -1;

var myLabelContent = new Array();
myLabelContent[0] = "(a)";
myLabelContent[1] = "(b)";
myLabelContent[2] = "(c)";
myLabelContent[3] = "(d)";
myLabelContent[4] = "(e)";
myLabelContent[5] = "(f)";
myLabelContent[6] = "(g)";
myLabelContent[7] = "(h)";
myLabelContent[8] = "(i)";
myLabelContent[9] = "(j)";
myLabelContent[10] = "(k)";
myLabelContent[11] = "(l)";
myLabelContent[12] = "(m)";
myLabelContent[13] = "(n)";
myLabelContent[14] = "(o)";
myLabelContent[15] = "(p)";
myLabelContent[16] = "(q)";
myLabelContent[17] = "(r)";
myLabelContent[18] = "(s)";
myLabelContent[19] = "(t)";
myLabelContent[20] = "(u)";
myLabelContent[21] = "(v)";
myLabelContent[22] = "(w)";
myLabelContent[23] = "(x)";
myLabelContent[24] = "(y)";
myLabelContent[25] = "(z)";


var myContent = (0 + myLabelTotal)
for (i = 0; i < myTotalLayers;  i++)
{
	myLayer = myDocument.artLayers[i];
	myLayer.textItem.contents = myLabelContent[myContent];
	myLabelTotal = (myLabelTotal -2);
	myContent = (i+1) + myLabelTotal;
}	

myDocument.flatten();