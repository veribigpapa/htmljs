/**
 * �������, ����������� ���������� ���������� ������� �������� 
 * (�� ���� ��������� � ������ �� �����, ��������� ������ ��� ��������)
 * @param object elem - �������, � �������� ����� ����������� �������
 * @param string evType - ��� ������� (��������: "click","mouseover")
 * @param function call - �������-���������� (����� ���������)
 */
function addEvent(elem,evType,call)
{
     if(elem.addEventListener)
     {  
        elem.addEventListener(evType, call, false);
     } 
     else if(elem.attachEvent) 
     {  
        elem.attachEvent('on' + evType, call); 
     }                
}  

/**
 * �������, �������������� ������������� ����������� ������
 */
function initStart()
{
     var arrayElem = document.getElementsByTagName('*');

     var arrayElemLength = arrayElem.length;
     
     for(var i=0;i<arrayElemLength;i++)
      {
            var attr = arrayElem[i].className;
            if(attr)
            {
                if(attr.indexOf('init_') !== -1)
                 {
                    var initText = attr.substr(attr.indexOf('init_'));
                    
                    if (initObject[initText])
                    {
                       initObject[initText](arrayElem[i])
                    }

                 }
            }
 
      }
}

/* ��� ������ �������� ����������, �������������� ���� ������� ��� ������ */
addEvent(window,'load',initStart);


    