@extends('_layouts.master')

@section('body')
<div class="h-screen flex justify-center items-center">
    <div class="rounded shadow-lg bg-grey-lightest w-1/3">
        <div class="px-6 py-4 flex flex-col">
            <div class="font-bold text-xl mb-4 text-center" id="result"></div>
            <button class="bg-teal hover:bg-teal-dark text-grey-lightest font-bold py-2 px-4 rounded" id="generate">Generate</button>
        </div>
    </div>
</div>
@endsection
