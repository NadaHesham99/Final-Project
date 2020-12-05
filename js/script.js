$(document).ready(function(){


		$("#register-form input").wrap("<div class='form-group'></div>");
		$("input:not([type='checkbox'],[type='submit'])").addClass("form-control");
    
		$(".resigter .form-control").parent().prev().each(function(index,item){
			$(this).addClass("form-control-label");
			let next = $(this).next();
			$(this).prependTo(next);
		});
		let checkContainer = $("input[type='checkbox']").parent();
		checkContainer.next().appendTo(checkContainer);
		
		$("input[type='submit']").parent().	addClass("text-right");
		

			
		$("input:not([type='submit'])").attr("data-toggle","tooltip");
		$('[data-toggle="tooltip"]').tooltip({ //activating tooltip
			placement:"left",
			html:true,
		});
		
		
		
		// /**validation**/
		$("#register-form input:not([type='submit'])").on("focus",function(){
			$(this).css("border","2px solid #74d2e7");
		});
		
		$("#register-form input:not([type='submit'])").on("blur",function(){toValidate($(this))});
		
		$("#register-form").on("submit",function(){
			
            
			let inputs = $(this).find("input:not([type='submit'])");
			var valid = true;
			inputs.each(function()
			{
				if(!toValidate($(this)))
				{
					$(this).css("border","2px solid #ef5956");
					$(this).tooltip('show');
					valid = false;
				}
			});
			if(!valid)
			{
				event.preventDefault();
			}
			
		});
		
		function toValidate(el)
		{
			if(!validate(el))
			{
				el.css("border","2px solid #ef5956");
				el.tooltip('show');
				return false;
			}
			else
			{
				el.css("border","2px solid #0af167");
				el.tooltip('hide');
				return true;
			}
		}
		
		
		function validate(el)
		{
			if(el.attr("name") == "name_ar")
			{
				if(el.val().trim().match(/^[\u0621-\u064A ]+$/) == null)//only arabic letters
				return false;
			}
			else if(el.attr("name") == "name_en")
			{
				if(el.val().trim().match(/^[a-zA-Z ]+$/) == null)
				return false;
			}
			else if(el.attr("name") == "email")
			{
				if(el.val().trim().match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/) == null)
				return false;
			}
			else if(el.attr("name") == "address")
			{
				if(el.val().trim().match(/^([\u0621-\u064A0-9\-, ]{3,})|([a-zA-Z0-9\-, ]{3,})+$/) == null)
				return false;
			}
			else if(el.attr("name") == "phone")
			{
				if(el.val().trim().match(/^\+?\d{10,}$/) == null)
				return false;
			}
			else if(el.attr("name") == "password")
			{
				if(el.val().trim().length < 8 )
				return false;
			}
			else if(el.attr("name") == "confirm-password")
			{
				if(el.val().trim().length < 8)
					return false;
				if(el.val().trim() != $("#register-form input[name='password']").val().trim())
					return false;
			}
			else if(el.attr("name") == "agree")
			{
				if(!el.is(":checked"))
				return false;
			}
			else if(el.has("required").val() == "")
			{
				return false;
			}
			return true;
		}

});	
	


/*==================================================*/

