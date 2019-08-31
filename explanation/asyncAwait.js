async function requestHandlers(req, res) {
    try {
        const user = await user.findeById(req.userId);
        const tasks = await Task.findeById(user.taskId);
        tasks.completed = true;
        await tasks.save();
        res.send('Task completed')    
    }
    catch(e) {
        res.send(e)
    }
    
}