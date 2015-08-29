(function($){
    $.multifield = function(opts){
        if(opts == undefined){
            opts = $.fn.multifield.defaults;
        }
        this.options = opts;
    };
    $.extend($.multifield.prototype, {
        init: function(element){
            this.el = element;
            var $this = this;
            this.bind(this.el);
            if(this.options.moveable){
                this.el.sortable({
                    items: 'li',
                    handle: 'a.Move',
                    placeholder: 'ElementPlaceholder',
                    containment: 'parent',
                    update: function(){
                        $this.updateWeight();
                    }
                });
            }
            this.el.on('sortstart', function(){
                var first = $('li:first-child .Structure', $this.el);
                $('.ElementPlaceholder', $this.el)
                    .height(first.height() - 2)
                    .width(first.width() - 2);
            });
            this.updateButtons();
        },
        bind: function(parent){
            var $this = this;
            $('a.Add', parent).on('click', function(){
                $this.add($(this));
            });
            $('a.Delete', parent).on('click', function(){
                $this.remove($(this));
            });
        },
        updateButtons: function(){
            var element_count = $('li', this.el).length;
            if(element_count >= this.options.max){
                $('li .Add', this.el).hide();
            } else {
                $('li .Add', this.el).show();
            }
            if(element_count <= this.options.min){
                $('li .Delete', this.el).hide();
            } else {
                $('li .Delete', this.el).show();
            }
            if(element_count == 1 || this.options.moveable == false){
                $('li .Move', this.el).hide();
            } else {
                $('li .Move', this.el).show();
            }
            this.updateJs();
            this.updateWeight();
        },
        add: function(sender){
            var new_element = $('li:first-child', this.el).clone();
            $('input, select, textarea', new_element).val('');
            this.bind(new_element);
            new_element.insertAfter(sender.closest('li'));
            this.updateButtons();
        },
        remove: function(sender){
            sender.closest('li').remove();
            this.updateButtons();
        },
        updateJs: function(){
            this.options.update_js(this);
        },
        updateWeight: function(){
            var index = 1;
            $('li', this.el).each(function(){
                $('input[data-weight="1"]', $(this)).val(index);
                index++;
            });
        }
    });
    $.fn.multifield = function(options){
        if(options == undefined){
            options = {};
        }
        new $.multifield($.extend({}, $.fn.multifield.defaults, options)).init(this);
        return this;
    };
    $.fn.multifield.defaults = {
        min: 1,
        max: 99,
        moveable: true,
        update_js: function($this){}
    };
})(jQuery);