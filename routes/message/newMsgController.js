app.controller('x-msg-controller', function($scope, $http) {

    $scope.save = function() {
        var tab = $('#newMsgSelect').val()
        var title = $('#newMsgTitle').val()
        if (tab == 0) {
            alertMessage('danger', '请选择分类')
            return
        }
        if (!title) {
            alertMessage('danger', '标题未填写')
            return
        }
        if ($('#summernote').summernote('isEmpty')) {
            alertMessage('danger', '内容不能为空')
            return
        }
        // var htmlBody = $('.panel-body').html()
        var htmlBody = $('#summernote').summernote('code');
        // console.log(tab + ':' + title + ':' + htmlBody)
        // onImageUpload callback
        // $('#summernote').summernote({
        //     callbacks: {
        //         onImageUpload: function(files) {
        //             // upload image to server and create imgNode...
        //             console.log(files);
        //             $summernote.summernote('insertNode', imgNode);
        //         }
        //     }
        // });
        // onImageUpload callback
        // $('#summernote').summernote({
        //     callbacks: {
        //         onImageUpload: function(files) {
        //             // upload image to server and create imgNode...
        //             $summernote.summernote('insertNode', imgNode);
        //         }
        //     }
        // });

        // summernote.image.upload
        // $('#summernote').on('summernote.image.upload', function(we, files) {
        //     // upload image to server and create imgNode...
        //     $summernote.summernote('insertNode', imgNode);
        // });



        // summernote.image.upload
        // $('#summernote').on('summernote.image.upload', function(we, files) {
        //     // upload image to server and create imgNode...
        //     console.log(we);
        //     console.log(files);
        //     $summernote.summernote('insertNode', imgNode);
        // });
        // console.log(htmlBody);
        // console.log(htmlBody.length);

        $http.post('/newMsg/save', {
            tab: tab,
            title: title,
            htmlBody: htmlBody
        }).success(function(res) {
            console.log(res.name);
            $scope.msg = res.name
        })
    }
})
