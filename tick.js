(function () {
    var Ticts=function Ticts() {
        this.ticts = {}; 
    };
    Ticts.prototype.createTicts=function(id,endtime){
        var ticts=this;
        var now = new Date();
        var endDate = new Date(endtime);
        var time=endDate.getTime()-now.getTime();
        var _ticts=this.ticts[id] = {
            endtime:endtime,
            id:id,
            time:time,
            interval:setInterval(function(){
                var t = null;
                var d = null;
                var h = null;
                var m = null;
                var s = null;
                t=_ticts.time/1000;
                d = Math.floor(t / (24 * 3600));
                h = Math.floor((t - 24 * 3600 * d) / 3600);
                m = Math.floor((t - 24 * 3600 * d - h * 3600) / 60);
                s = Math.floor((t - 24 * 3600 * d - h * 3600 - m * 60));
                document.getElementById(id).innerHTML = d + '天' + h + '小时' + m + '分钟' + s + '秒';
                _ticts.time -= 1000;
                if (_ticts.time < 0)
　　　　　　　　　　　ticts.deleteTicts(id);                               
            },1000)
        }       
    }
    Ticts.prototype.deleteTicts = function(id) {
        clearInterval(this.ticts[id].interval);
        delete this.ticts[id];
    };
    window.Ticts=new Ticts();   
})()
