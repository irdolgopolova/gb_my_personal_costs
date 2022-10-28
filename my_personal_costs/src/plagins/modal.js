export default {
    install (Vue) {
        if (this.installed) {
            return;
        }

        this.installed = true;

        Vue.prototype.$modal = {
            EventBus: new Vue,
            show(name) {
                this.EventBus.$emit('show', name);
            },
            hide(name) {
                this.EventBus.$emit('hide', name);
            }
        }
    }
}