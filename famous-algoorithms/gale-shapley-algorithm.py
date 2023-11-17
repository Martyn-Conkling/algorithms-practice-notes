def stableInternships(interns, teams):
    n = len(interns)
    # Initialize all interns and teams as free
    intern_free = [True] * n
    team_matched = [-1] * n

    # While there are free interns who haven't proposed to all teams
    while intern_free.count(True) > 0:
        intern = intern_free.index(True)

        # Intern proposes to the most preferred team that hasn't been proposed to yet
        for team in interns[intern]:
            if team_matched[team] == -1:
                # If the team is free, accept the proposal
                team_matched[team] = intern
                intern_free[intern] = False
                break
            else:
                # If the team prefers this intern over the current one
                current_intern = team_matched[team]
                if teams[team].index(intern) < teams[team].index(current_intern):
                    team_matched[team] = intern
                    intern_free[intern] = False
                    intern_free[current_intern] = True
                    break

    # Creating the final list of matchings
    matching = [[team_matched[i], i] for i in range(n)]
    return matching