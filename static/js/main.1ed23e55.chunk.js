(this.webpackJsonpwaitstaff=this.webpackJsonpwaitstaff||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),i=a.n(r),c=(a(14),a(1)),o=a(4),u=a(5),s=a(7),m=a(6),p=a(8),h=(a(15),{currentInput:{mealPrice:0,taxRate:0,tipPercentage:0},customerCharges:{subTotal:0,tip:0,total:0},myEarnings:{tipTotal:0,mealCount:0,averageTipPerMeal:0}}),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state=Object(c.a)({},h),a.handleSubmit=function(e){e.preventDefault();var t=e.target,n=t.baseMeal,l=t.taxRate,r=t.tipPercentage,i=parseInt(n.value),c=parseInt(l.value),o=parseInt(r.value),u=a.calculateCustomerCharges(i,c,o),s=u.subTotal,m=u.tip,p=u.total;a.setState((function(e){return{currentInput:{mealPrice:i,taxRate:c,tipPercentage:o},customerCharges:{subTotal:s,tip:m,total:p},myEarnings:{tipTotal:+(e.myEarnings.tipTotal+m).toFixed(2),mealCount:e.myEarnings.mealCount+1,averageTipPerMeal:+((e.myEarnings.tipTotal+m)/(e.myEarnings.mealCount+1)).toFixed(2)}}})),n.value="",l.value="",r.value=""},a.handleOnChange=function(){var e=document.getElementsByName("baseMeal")[0].value,t=document.getElementsByName("taxRate")[0].value,n=document.getElementsByName("tipPercentage")[0].value;["baseMeal","taxRate","tipPercentage"].forEach((function(e){e=0===e.length?0:parseInt(e)}));var l=a.calculateCustomerCharges(e,t,n),r=l.subTotal,i=l.tip,c=l.total;a.setState({customerCharges:{subTotal:r,tip:i,total:c}})},a.handleResetClick=function(){a.setState(Object(c.a)({},h))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"calculateCustomerCharges",value:function(e,t,a){var n=e*(t/100+1),l=n*(a/100),r=n+l;return{subTotal:n=+n.toFixed(2),tip:l=+l.toFixed(2),total:r=+r.toFixed(2)}}},{key:"render",value:function(){var e=this.state,t=e.customerCharges,a=e.myEarnings;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"imageContainer"},l.a.createElement("header",{className:"App__Header"},l.a.createElement("h1",null,"Waitstaff Calculator")),l.a.createElement("main",null,l.a.createElement("div",{className:"boxesContainer"},l.a.createElement("div",{className:"mealDetails"},l.a.createElement("h2",null,"Enter the meal details"),l.a.createElement("hr",null),l.a.createElement("form",{onSubmit:this.handleSubmit,onChange:this.handleOnChange},l.a.createElement("label",{htmlFor:"baseMeal"},"Enter Base Meal Price: $"),l.a.createElement("input",{name:"baseMeal",placeholder:"Base Meal Price",type:"number",required:!0}),l.a.createElement("label",{htmlFor:"taxRate"},"Enter Tax Rate: %"),l.a.createElement("input",{name:"taxRate",placeholder:"Tax Rate",type:"number",required:!0}),l.a.createElement("label",{htmlFor:"tipPercentage"},"Enter Tip Percentage: %"),l.a.createElement("input",{name:"tipPercentage",placeholder:"Tip Percentage",type:"number",required:!0}),l.a.createElement("button",{type:"submit"},"Submit"),l.a.createElement("button",{type:"reset"},"Cancel"))),l.a.createElement("div",{className:"rightContainer"},l.a.createElement("div",{className:"customerCharges"},l.a.createElement("h2",null,"Customer Charges"),l.a.createElement("hr",null),l.a.createElement("ul",null,l.a.createElement("li",null,"Subtotal : $",t.subTotal),l.a.createElement("li",null,"Tip : $",t.tip),l.a.createElement("li",null,"Total : $",t.total))),l.a.createElement("div",{className:"earnings"},l.a.createElement("h2",null,"My Earnings"),l.a.createElement("hr",null),l.a.createElement("ul",null,l.a.createElement("li",null,"Tip Total : $",a.tipTotal),l.a.createElement("li",null,"Meal Count : ",a.mealCount),l.a.createElement("li",null,"Average Tip Per Meal : $",a.averageTipPerMeal))))),l.a.createElement("div",{className:"resetButton"},l.a.createElement("button",{onClick:this.handleResetClick},"Reset")))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.1ed23e55.chunk.js.map