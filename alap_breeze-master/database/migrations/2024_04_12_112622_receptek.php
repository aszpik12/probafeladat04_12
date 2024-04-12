<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('receptek', function (Blueprint $table) {
            $table->id();
            $table->string('nev');
            $table->foreignId('kat_id')->references('id')->on("kategoria");
            $table->string('kep_eleresi_ut');
            $table->string('leiras');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
