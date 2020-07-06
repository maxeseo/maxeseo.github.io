'use strict';

angular.
    module('playerList').
    component('playerList', {
        templateUrl: 'player-list/player-list.html',

        controller: function PlayerListController() {            
            this.namesEntered = false;
            this.addNames = addNames;
            this.reset = reset;
            this.addPlayerFought = addPlayerFought;
            this.removePlayer = removePlayer;
            this.clearQueue = clearQueue;

            this.maxQueueSize = 4;
            this.playersFought = [];

            this.players = [
                {
                    name: '',
                    playerId: '1',
                    canFight: true,
                    isAlive: true
                },
                {
                    name: '',
                    playerId: '2',
                    canFight: true,
                    isAlive: true
                },
                {
                    name: '',
                    playerId: '3',
                    canFight: true,
                    isAlive: true
                },
                {
                    name: '',
                    playerId: '4',
                    canFight: true,
                    isAlive: true
                },
                {
                    name: '',
                    playerId: '5',
                    canFight: true,
                    isAlive: true
                },
                {
                    name: '',
                    playerId: '6',
                    canFight: true,
                    isAlive: true
                },
                {
                    name: '',
                    playerId: '7',
                    canFight: true,
                    isAlive: true
                }
            ];


            function addNames() {
                this.namesEntered = true;
            }

            function addPlayerFought(player, $index) {
                this.playersFought.push(player);
                this.players[$index].canFight = false;
                if (this.playersFought.length > this.maxQueueSize) {
                    var returningPlayer = this.playersFought.shift();
                    _.find(this.players, function(player){
                        return player.playerId == returningPlayer.playerId;
                    }).canFight = true;
                }
            }

            function removePlayer($index) {
                this.playersFought = [];
                this.players[$index].isAlive = false;
                _.each(this.players, function(player) {
                    player.canFight = true;
                });
                if (this.maxQueueSize > 1) {
                    this.maxQueueSize = this.maxQueueSize - 1;
                }
            }

            function reset() {
                this.namesEntered = false;
                this.maxQueueSize = 4;
                this.playersFought = [];
                _.each(this.players, function(player) {
                    player.name = '';
                    player.canFight = true;
                    player.isAlive = true;
                });
            }

            function clearQueue() {
                _.each(this.players, function(player) {
                    player.canFight = true;
                });
            }
        }
    });

