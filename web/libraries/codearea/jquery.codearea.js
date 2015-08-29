(function($){

    $.codearea = function(element){
        this.el = element.clone().css('resize', 'none').attr('spellcheck', false);
        this.lines = $('<div />').addClass('lines');
        this.container = $('<div />')
            .addClass('codearea')
            .width(element.outerWidth())
            .append($('<div />').addClass('structure').append($('<div />').addClass('row')
                .append($('<div />').addClass('cell nb').append($('<div />').addClass('lines-container').append(this.lines)))
                .append($('<div />').addClass('cell').append(this.el))
            ));

        element.replaceWith(this.container);
        this.updateLinesNumbers();

        var $this = this;

        this.el.on('keyup', function(){
            return $this.updateLinesNumbers();
        });

        this.el.on('scroll', function(){
            return $this.scroll();
        });

        this.el.on('keypress keyup', function(){
            $this.updateLinesNumbers();
        });
    };

    $.extend($.codearea.prototype, {

        countLines: function(){
            return this.el.val().split("\n").length;
        },

        fillLinesNumbers: function(nb_lines, current_line){
            this.lines.html('');

            while(current_line <= nb_lines){
                this.lines.append("<div class='lineno'>" + current_line + "</div>");
                current_line++;
            }
        },

        updateLinesNumbers: function(){
            if(this.count_lines != this.countLines()){
                this.fillLinesNumbers(this.countLines(), 1);
                this.count_lines = this.countLines();
                this.lines.parent().parent().width((this.count_lines.toString().length * 10) + 5);
            }
        },

        scroll: function(){
            this.lines.css({
                'margin-top': (-1*this.el.scrollTop()) + "px"
            });
        }
    });

    $.fn.codearea = function(){
        new $.codearea(this);
        return this;
    };

})(jQuery);