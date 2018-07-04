/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'error': '&#xe000;',
            'error_outline': '&#xe001;',
            'not_interested': '&#xe033;',
            'do_not_disturb': '&#xe033;',
            'subtitles': '&#xe048;',
            'web': '&#xe051;',
            'fiber_new': '&#xe05e;',
            'subscriptions': '&#xe064;',
            'call_to_action': '&#xe06c;',
            'import_contacts': '&#xe0e0;',
            'mail_outline': '&#xe0e1;',
            'add': '&#xe145;',
            'add_box': '&#xe146;',
            'add_circle': '&#xe147;',
            'content_copy': '&#xe14d;',
            'content_cut': '&#xe14e;',
            'content_paste': '&#xe14f;',
            'drafts': '&#xe151;',
            'sort': '&#xe164;',
            'attach_file': '&#xe226;',
            'border_color': '&#xe22b;',
            'insert_invitation': '&#xe24f;',
            'event': '&#xe24f;',
            'vertical_align_bottom': '&#xe258;',
            'vertical_align_center': '&#xe259;',
            'vertical_align_top': '&#xe25a;',
            'attachment': '&#xe2bc;',
            'file_upload': '&#xe2c6;',
            'create_new_folder': '&#xe2cc;',
            'keyboard_arrow_down': '&#xe313;',
            'keyboard_arrow_left': '&#xe314;',
            'keyboard_arrow_right': '&#xe315;',
            'keyboard_arrow_up': '&#xe316;',
            'phone_android': '&#xe324;',
            'security': '&#xe32a;',
            'control_point': '&#xe3ba;',
            'add_circle_outline': '&#xe3ba;',
            'loupe': '&#xe402;',
            'add_a_photo': '&#xe439;',
            'map': '&#xe55b;',
            'subway': '&#xe56f;',
            'arrow_back': '&#xe5c4;',
            'arrow_drop_down': '&#xe5c5;',
            'arrow_drop_down_circle': '&#xe5c6;',
            'arrow_drop_up': '&#xe5c7;',
            'arrow_forward': '&#xe5c8;',
            'cancel': '&#xe5c9;',
            'check': '&#xe5ca;',
            'close': '&#xe5cd;',
            'clear': '&#xe5cd;',
            'unfold_more': '&#xe5d7;',
            'arrow_upward': '&#xe5d8;',
            'subdirectory_arrow_right': '&#xe5da;',
            'arrow_downward': '&#xe5db;',
            'adb': '&#xe60e;',
            'do_not_disturb_alt': '&#xe611;',
            'event_available': '&#xe614;',
            'event_busy': '&#xe615;',
            'event_note': '&#xe616;',
            'personal_video': '&#xe63b;',
            'people': '&#xe7fb;',
            'group': '&#xe7fb;',
            'people_outline': '&#xe7fc;',
            'person': '&#xe7fd;',
            'person_add': '&#xe7fe;',
            'person_outline': '&#xe7ff;',
            'perm_identity': '&#xe7ff;',
            'public': '&#xe80b;',
            'gear': '&#xe810;',
            'cog': '&#xe810;',
            'sentiment_dissatisfied': '&#xe811;',
            'sentiment_neutral': '&#xe812;',
            'sentiment_satisfied': '&#xe813;',
            'sentiment_very_dissatisfied': '&#xe814;',
            'sentiment_very_satisfied': '&#xe815;',
            'users': '&#xe82b;',
            'group': '&#xe82b;',
            'check_box': '&#xe834;',
            'check_box_outline_blank': '&#xe835;',
            'pie-chart': '&#xe842;',
            'chart': '&#xe842;',
            'spaceship': '&#xe84b;',
            'rocket': '&#xe84b;',
            'account_box': '&#xe851;',
            'account_circle': '&#xe853;',
            'android': '&#xe859;',
            'bug_report': '&#xe868;',
            'insect': '&#xe869;',
            'bug': '&#xe869;',
            'embed': '&#xe86a;',
            'code': '&#xe86a;',
            'check_circle': '&#xe86c;',
            'chrome_reader_mode': '&#xe86d;',
            'code': '&#xe86f;',
            'exit_to_app': '&#xe879;',
            'extension': '&#xe87b;',
            'find_in_page': '&#xe880;',
            'find_replace': '&#xe881;',
            'get_app': '&#xe884;',
            'file_download': '&#xe884;',
            'home': '&#xe88a;',
            'stack': '&#xe88e;',
            'layers': '&#xe88e;',
            'note_add': '&#xe89c;',
            'payment': '&#xe8a1;',
            'credit_card': '&#xe8a1;',
            'hand': '&#xe8a5;',
            'drag': '&#xe8a5;',
            'perm_phone_msg': '&#xe8a8;',
            'print': '&#xe8ad;',
            'local_printshop': '&#xe8ad;',
            'room': '&#xe8b4;',
            'place': '&#xe8b4;',
            'location_on': '&#xe8b4;',
            'settings': '&#xe8b8;',
            'verified_user': '&#xe8e8;',
            'view_list': '&#xe8ef;',
            'youtube_searched_for': '&#xe8fa;',
            'zoom_in': '&#xe8ff;',
            'delete_forever': '&#xe959;',
            'g_translate': '&#xe95a;',
            'zoom_out': '&#xe95b;',
            'date_range': '&#xe9b9;',
            '': '&#xf1d9;',
            'key': '&#xe98d;',
            'password': '&#xe98d;',
            'enter': '&#xea13;',
            'signin': '&#xea13;',
            'exit': '&#xea14;',
            'signout': '&#xea14;',
            'notifications_none': '&#xe7f5;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/sc/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
