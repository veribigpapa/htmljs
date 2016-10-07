/**
 * Объект, содержащий функции для обработки привязанных блоков
 */
var initObject = 
{
   /**
    * Привязываем к html-элементу, содержащему class "init_block1" функционал
    * @param object elem - сам html-объект (передаётся из функции-обработчика)
    */
   init_block1: function(elem)
   {
       elem.innerHTML += ' Опа...Отработала привязанная к блоку функция';
   },
   
   /**
    * Привязываем к html-элементу, содержащему class "init_block2" функционал
    * @param object elem - сам html-объект (передаётся из функции-обработчика)
    */
   init_block2: function(elem)
   {
       elem.innerHTML += ' Отработала и у этого блока. А теперь кликни тут';
       
       addEvent(elem,'click',function(){
           
           alert('Работает!');
           
       });
       
   }   
}