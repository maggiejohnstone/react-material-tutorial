import { React, Fragment } from "react";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from "@material-ui/core/Typography";

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 30,
        height: 500,
        overflow: 'auto'}
}

export default ({
        exercises,
        category,
        onSelect,
        exercise: {
            id,
            title = "Welcome!",
            description = "Please select an exercise from the list."
        }
    }) =>
    <Grid container sm>
        <Grid item sm>
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) =>
                    !category || category === group
                        ? <Fragment key={group}>
                                <Typography
                                    variant={"h5"}
                                    style={{textTransform: 'capitalize'}}
                                >
                                    {group}
                                </Typography>
                                <List component="ul">
                                    {exercises.map(({ id, title }) =>
                                        <ListItem
                                            key={group}
                                            button
                                            onClick={() => onSelect(id)}
                                        >
                                            <ListItemText
                                                primary={title}
                                            />
                                        </ListItem>
                                    )}
                                </List>
                            </Fragment>
                        : null
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography
                    variant={"h3"}
                >
                    {title}
                </Typography>
                <Typography
                    variant={"h5"}
                    style={{marginTop: 20}}
                >
                    {description}
                </Typography>

            </Paper>
        </Grid>
    </Grid>
