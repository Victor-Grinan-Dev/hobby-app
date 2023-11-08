## Create

CREATE DATABASE IF NOT EXISTS pooper_bowl;

CREATE TABLE IF NOT EXISTS teams (
    team_id int NOT NULL AUTO_INCREMENT,
    team_name varchar(255),
    team_color varchar(16),
    team_is_stunty int NOT NULL,
    team_coach_id int,
    PRIMARY KEY (team_id),
    FOREIGN KEY (player_team_id) REFERENCES coaches (coach_id)
);

CREATE TABLE IF NOT EXISTS coaches (
    coach_id int NOT NULL AUTO_INCREMENT,
    coach_name varchar(255),
    active int NOT NULL,
    PRIMARY KEY (coach_id)
);

CREATE TABLE IF NOT EXISTS players (
    player_id int NOT NULL AUTO_INCREMENT,
    player_team_id int,
    player_name varchar(255),
    seasons_played int,
    touchdowns int,
    casualties int,
    spp_total int,
    spp_spent int,
    movement int,
    strength int,
    armor int,
    alive int,
    PRIMARY KEY (player_id),
    FOREIGN KEY (player_team_id) REFERENCES teams (team_id)
);

CREATE TABLE IF NOT EXISTS skills (
    skill_id    int NOT NULL AUTO_INCREMENT,
    skill_name  varchar(255) NOT NULL,
    skill_category  varchar(255) NOT NULL,
    PRIMARY KEY (skill_id)
);

CREATE TABLE IF NOT EXISTS player_skills (
    ps_id int NOT NULL AUTO_INCREMENT,
    ps_player_id int NOT NULL,
    ps_skill_id int NOT NULL,
    ps_chosen int NOT NULL,
    ps_primary int NOT NULL,
    PRIMARY KEY (ps_id),
    FOREIGN KEY (ps_player_id) REFERENCES players (player_id),
    FOREIGN KEY (ps_skill_id) REFERENCES skills (skill_id)
);

CREATE TABLE IF NOT EXISTS injuries (
    injury_id    int NOT NULL AUTO_INCREMENT,
    injury_name  varchar(255) NOT NULL,
    PRIMARY KEY (injury_id)
);

CREATE TABLE IF NOT EXISTS player_injuries (
    pi_id int NOT NULL AUTO_INCREMENT,
    pi_player_id int NOT NULL,
    pi_injury_id int NOT NULL,
    pi_active int NOT NULL,
    PRIMARY KEY (pi_id),
    FOREIGN KEY (pi_player_id) REFERENCES players (player_id),
    FOREIGN KEY (pi_injury_id) REFERENCES injuries (injury_id)
);

CREATE TABLE IF NOT EXISTS fixtures (
    fixture_id	int NOT NULL AUTO_INCREMENT,
    fixture_coach_one_id int NOT NULL,
    fixture_coach_two_id int NOT NULL,
    fixture_coach_one_score int,
    fixture_coach_two_score int,
    fixture_date DATE,
    fixture_season_id int NOT NULL,
    FOREIGN KEY (fixture_season_id) REFERENCES season (season_id)
);

CREATE TABLE IF NOT EXISTS seasons (
    season_id int NOT NULL AUTO_INCREMENT,
    season_name varchar(255) NOT NULL,
    season_active int NOT NULL DEFAULT 1,
);

CREATE TABLE IF NOT EXISTS season_teams (
    st_id int NOT NULL AUTO_INCREMENT,
    st_team_id int NOT NULL,
    PRIMARY KEY (st_id),
    FOREIGN KEY (st_team_id) REFERENCES teams (team_id),
);

