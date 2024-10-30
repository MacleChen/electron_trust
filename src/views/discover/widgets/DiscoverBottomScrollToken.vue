<template>
    <div class="discover_bottom_scroll_containter">
        <div style="width: 30px; height: 30px;">
            <img @dragstart.prevent src="../../../assets/asserts/145_Normal.png" width="100%"/>
        </div> 
        <div style="flex-grow: 1;">
            <div style="display: flex;">
                <label class="cell_left_title_containter" style="font-weight: bold;">Trust Wallet</label> 
                <label class="cell_right_title_containter" style="font-weight: bold;">$1.01</label>
            </div>
            <div style="display: flex;">
                <label class="cell_left_title_containter">TWT</label>
                <label class="cell_right_title_containter" style="color: red;">-1.36%</label>
            </div>
        </div>
    </div>
</template>

<style>
.discover_bottom_scroll_containter {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 10px;
}
</style>