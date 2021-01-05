javascript: 
  if (!searchText) { 
    var searchText = ''; 
  } 

  (function() { 
    searchText = prompt('Type words/phrases to highlight separated by |', searchText); 
    var searchArray = searchText.split('|'); 

    for (var i=0, length=searchArray.length; i<length; i++) { 
      searchArray[i] = searchArray[i].toLowerCase(); 
    } 

    var colors = [ '#ff0', '#fa0', '#9f5', '#0bf', '#ff3300', '#ff3399' ]; 
    
    function findChildNodes(node) { 
      if (node.tagName != 'SCRIPT') { 
        var childNodes = node.childNodes; 
        var count = childNodes.length; 
        
        if (count > 0) { 
          for (var i=0; i<count; i++) { 
            findChildNodes(childNodes[i]); 
          } 

        } else if (node.nodeName == '#text') { 
          var text = node.nodeValue; 
          var textWithoutWhitespace = text.replace(/\s+/g, ''); 
          
          if (textWithoutWhitespace.length > 0) { 
            searchTheTextNode(node); 
          } 
        } 
      } 
    } 
    
    function searchTheTextNode(textNode) { 
      var text, 
        find, 
        replace, 
        container, 
        color, 
        originalText; 

      text = textNode.nodeValue; 
      originalText = text; 
      
      for (var i=0, count=searchArray.length; i<count; i++) { 
        color = colors[ (i + colors.length) % colors.length ]; 
        find = searchArray[i]; 
        replace = '<font style="background-color:'+color+';">'+find+'</font>'; 
        text = replaceAll(find, replace, text); 
      } 
      
      if (originalText != text) { 
        container = document.createElement('font'); 
        container.innerHTML = text; 
        textNode.parentNode.replaceChild(container, textNode); 
      } 
    } 
    
    function replaceAll(find, replace, str) { 
      return str.replace(new RegExp(find, 'gi'), replace); 
    } 
    
    findChildNodes(document.body); 
  })();