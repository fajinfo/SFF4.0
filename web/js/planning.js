(function($){
    $.planning = function(opts){
        if(opts == undefined){
            opts = $.fn.planning.defaults;
        }
        this.options = opts;
    };
    $.extend($.planning.prototype, {
        init: function(element){
            this.planning_content = element;
            this.top_container = $('.HeaderContainer', this.planning_content.parent());
            this.left_container = $('.LeftContainer', this.planning_content);
            this.main_container = $('.ContentContainer', this.planning_content);

            this.scrolling();
            this.leftSelection();
            this.catchNew();
        },
        scrolling: function(){
            var $this = this;
            this.main_container.on('scroll', function(){
                $('.Content', $this.left_container).css({ marginTop: (0 - $(this).scrollTop()) + 'px'});
                $('.Headers', $this.top_container).css({ marginLeft: (0 - $(this).scrollLeft()) + 'px'});
                $.cookie('planning_pos', $(this).scrollTop() + '-' + $(this).scrollLeft());
            });
            if($.cookie('planning_pos')){
                var tmp = $.cookie('planning_pos').split('-');
                if(tmp.length == 2){
                    this.main_container.scrollTop(tmp[0]);
                    this.main_container.scrollLeft(tmp[1]);
                } else {
                    $.removeCookie('planning_pos');
                }
            }
        },
        leftSelection: function(){
            var $this = this;
            $('.Line', this.left_container).on('click', function(e){
                var data_key = $(this).attr('data-driver') ? 'data-driver' : 'data-equipment';
                var o = $('.Line', $this.planning_content);
                if((nexus.isMac() && e.metaKey) || (!nexus.isMac() && e.ctrlKey)){
                    e.preventDefault();
                    o = o.filter('[' + data_key + '=' + $(this).attr(data_key) + ']');
                    if(o.hasClass('Selected')){
                        o.removeClass('Selected');
                    } else {
                        o.addClass('Selected');
                    }
                } else {
                    o.removeClass('Selected');
                }
            });
        },
        catchNew: function(){
            var $this = this;
            if($('.Planning.Readonly').length <= 0){
                $('.Hour', this.main_container).not('.Off').on('dblclick', function(){
                    if($this.options.base_url == null || $this.options.base_url == ''){
                        alert("Base url is undefinded");
                    } else {
                        $.fancybox.open({
                            href: $this.options.base_url,
                            type:'ajax',
                            ajax: {
                                data: {
                                    def_driver: $(this).parent().parent().attr('data-driver'),
                                    def_start: $(this).attr('data-time'),
                                    def_vehicle: $(this).parent().parent().attr('data-equipment')
                                }
                            },
                            fitToView:false,
                            padding:0,
                            modal: true,
                            openEffect:'none',
                            closeEffect:'none',
                            topRatio:0.1
                        });
                    }
                }).hover(function(){
                    $(this).append($('<span />').addClass('Placeholder'));
                }, function(){
                    $('.Placeholder', $(this)).remove();
                });
            }
        }
    });
    $.planning.update = function(){
        $('a.Affectation').each(function(){
            $(this).qtip('destroy', true);
        });
        $.ajax({
            url: PLANNING_URL,
            success: function(data){
                $('#planning_affectations').html(data);
            }
        });
    };
    $.fn.planning = function(options){
        if(options == undefined){
            options = {};
        }
        new $.planning($.extend({}, $.fn.planning.defaults, options)).init(this);
        return this;
    };
    $.fn.planning.defaults = {
        base_url: null
    };
})(jQuery);