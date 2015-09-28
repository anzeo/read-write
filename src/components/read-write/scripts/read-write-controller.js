System.register([], function(exports_1) {
    var ReadWriteController;
    return {
        setters:[],
        execute: function() {
            ReadWriteController = (function () {
                function ReadWriteController() {
                    var _this = this;
                    this.disableWriteMode = function () {
                        _this.isWriteModeEnabled = false;
                    };
                    this.enableWriteMode = function () {
                        _this.isWriteModeEnabled = true;
                    };
                    this.setWriteMode = function () {
                        if (_this.isWriteModeEnabled) {
                            _this.isInReadMode = false;
                        }
                    };
                    this.setReadMode = function () {
                        _this.isInReadMode = true;
                    };
                    this.isInReadMode = true;
                }
                return ReadWriteController;
            })();
            exports_1("default", ReadWriteController);
        }
    }
});
