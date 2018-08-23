(function(){
    initialize();

    function initialize() {
        const initialFormValues = {
            iterations: 10000,
            operator: '+',
            x: 12050,
            y: 6025
        };

        addBtnWavesEffect();

        $('select').formSelect();

        setFormValues(initialFormValues);

        addClickHandlers();
    }

    function addClickHandlers() {
        $('#main')
            .on('click', '#switch-button', () => {
                runTest('#switch-results', switchDoMath);
            })
            .on('click', '#object-button', () => {
                runTest('#object-results', objectDoMath);
            })
            .on('click', '#both-button', () => {
                runTest('#switch-results', switchDoMath);
                runTest('#object-results', shorterDoMath);
            });
    }

    function runTest(resultsId, func) {
        const { iterations, x, operator, y } = getFormValues(['iterations', 'x', 'operator', 'y']);

        const results = runBenchmark(iterations, func, [x, operator, y]);

        displayResults(resultsId, results);
    }

    function setFormValues(values){
        for( let [id, val] of Object.entries(values)){
            $(`#${id}`).val(val);
        }
    }

    function getFormValues(ids){
        const values = {};

        ids.forEach(id => {
            values[id] = $(`#${id}`).val();
        });

        return values;
    }

    function addToDom(s, c) {
        $(s).append(c);
    }

    function createElement(type, html, className = ''){
        return $(`<${type}>`, {
            class: className,
            html
        });
    }

    function createCollectionItem(text, val){
        return createElement('li', `<b>${text}:</b> ${val}`, 'collection-item');
    }

    function clearElement(s) {
        $(s).html('');
    }

    function displayResults(selector, results){
        clearElement(selector);

        const total = createCollectionItem('Total Time (ms)', results.total);
        const average = createCollectionItem('Average Time (ms)', results.average);

        addToDom(selector, [total, average]);
    }

    function runBenchmark(count, func, args){
        const start = performance.now();
        for(let c = 0; c < count; c++){
            func(...args);
        }
        const totalTime = performance.now() - start;

        return {
            average: totalTime / count,
            total: totalTime
        }
    }

    function addBtnWavesEffect(){
        $('.btn').addClass('waves-effect waves-light');
    }
}());
