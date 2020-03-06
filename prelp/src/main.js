$(document).ready(function(){$('[data-js-date_en]').each(function(){$(this).append(set_date_en($(this).attr('data-js-date_en')));});})
function set_date_en(diff){d=new Date();p=new Date(d.getTime()+diff*86400000);monthA='January,February,March,April,May,June,July,August,September,October,November,December'.split(',');var w=p.getDate();return(p.getDate()+' '+monthA[p.getMonth()]+' '+p.getFullYear());}
$(document).ready(function(){$('[data-js-year]').each(function(){$(this).html(set_year($(this).attr('data-js-year')));});})
function set_year(){d=new Date();return(d.getFullYear());}