var otop = document.getElementsByClassName('zhiding')[0];
//用localStorage带来的disease参数
//console.log(localStorage.diseaseDescription);
otop.onclick = function() {
        window.scrollTo(0, 0);
    }
    //findDiseaseCategoryBySystemId.action
var dId = window.location.href.split('=', 2)[1];
//下面打算按钮点击权限发送ajax
$.ajax({
    url: url + '/ErXueSSM/user/findDiseaseCategoryWithAcupointsById.action',
    type: 'POST',
    dataType: '',
    data: {
        diseaseCategoryId: dId
    },
    success: function(data) {
    	console.log(data);
        $('.disease-description').append(data.diseaseDescription);
        $('.btn').click(function() {

            var mod = [];
            var arr = [];
            var vid = [];
            var vad = [];
            $('.main-cure').css({"display":"block","border":"solid gray 1px"});
            $('.cure-plan').append(data.attention);
            //diseaseDescription       
            $('#main-title').text(data.diseaseCategoryName);
            $('.am-header-title').text(data.diseaseCategoryName);
            for (var i = 0; i < data.diseaseCategoryAndAcupointList.length; i++) {
                if (data.diseaseCategoryAndAcupointList[i].acupointType === '主穴') {
                    mod.push(data.diseaseCategoryAndAcupointList[i].acupointName);
                    vid.push(data.diseaseCategoryAndAcupointList[i].videoLocation); //vid主穴视频，vad配穴视频
                } else {
                    arr.push(data.diseaseCategoryAndAcupointList[i].acupointName);
                    vad.push(data.diseaseCategoryAndAcupointList[i].videoLocation);
                } //判断主配穴
            }
                        $('.main-class ').append('<span><p>主穴:</p></span>');
            for (var i = 0; i < mod.length; i++) {
                $('.main-class').append('<a class="fl" href="#myvideo" name=' + vid[i] + '>' + mod[i] + '</a>');
            }
            $('.main-class ').append('<span><p>配穴:</p></span>');
            for (var i = 0; i < arr.length; i++) {
                $('.main-class').append('<a class="fl" href="#myvideo" name=' + vad[i] + '>' + arr[i] + '</a>');
            }
            $('.main-class').append('</br><video poster="http://p3a3la3o0.bkt.clouddn.com/image/videoIcon4.jpg"  src='+"http:" + vid[0] + '  width=300px height=200px controls="controls" id="myvideo">');
            $('.main-class a').each(function() {
                $(this).click(function() {
                	 mySrc = "http:"+$(this).attr('name');
                	$('.am-modal-bd').html("是否确定切换播放"+$(this).text()+"?");
                	 $('#my-confirm').modal({
				        relatedTarget: this,
				        onConfirm: function(options) {
	                    $('#myvideo').attr('src', mySrc);	
	                    },
				        // closeOnConfirm: false,
				        onCancel: function() {
				          //alert('算求，不弄了');
				        }
				      });
				    });
                	
                });
            
            $('.btn').css('display', 'none');
        });
    },
    error: function(xml, textstatus, errorthrown) {

        console.log('错误信息:' + textstatus);
        console.log('捕获错误对象' + errorthrown);
        $('.main-class').append('<p style="text-algin:center; font-size:2rem;">服务器繁忙,请稍后再试</p>')
    }
});