const headerScroll = (
    $(document).scroll(() => {
        let $nav = $(".scroll");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height())
    }));
